let requestAnimFrame = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    setTimeout(callback, 1000 / 60);
  },
  vueProgress = function (options) {
    let endAngleRad = Math.PI / 180 * 270
    this._el = options.dom  //绑定的dom节点
    this._type = options.type || 'circle' //svg进度条类型（circle/rect）
    this._rectWidth = options.rectWidth || 200 //rect的宽度
    this._rectHeight = options.rectHeight || 20 //rect的高度
    this._rectRadius = options.rectRadius || 0  //rect的圆角半径
    this._radius = options.radius || 50 //circle的半径
    this._duration = options.duration === undefined ? 500 : options.duration //动画时间
    this._maxValue = options.maxValue || 100 //最大值
    this._text = options.text === undefined ? function (value) {
      return this.htmlifyNumber(value)
    } : options.text   // 文字格式
    this._strokeWidth = options.circleWidth || 10   // circle的圆环宽度
    this._circleLineCap = options.circleLineCap   // circle的strokelinecap属性定义不同类型的开放路径的终结：
    this._colors = options.pathColors || ['#EEE', '#F00'] //path的fill颜色
    this._gradientColor = options.gradientColor //第二个rect/path的渐变色
    this._gradientOpacity = options.gradientOpacity || [1, 1] //第二个rect/path的渐变色的透明度
    this._textColor = options.textColor || '#000'
    this._value = 0
    this._svg = null
    this._movingPath = null
    this._wrapContainer = null
    this._textContainer = null
    this._wrpClass = options.wrapClass || 'circles-wrap'
    this._textClass = options.textClass || 'circles-text'
    this._valClass = options.valueStrokeClass || 'circles-valueStroke'
    this._maxValClass = options.maxValueStrokeClass || 'circles-maxValueStroke'
    this._styleWrapper = options.styleWrapper === false ? false : true
    this._styleText = options.styleText === false ? false : true
    this._start = -Math.PI / 180 * 90
    this._startPrecise = this._precise(this._start)
    this._circ = endAngleRad - this._start
    this._generate().update(options.value || 0) //初始化进度条
  }

vueProgress.prototype = {
  _generate: function () {
    this._svgSize = this._radius * 2
    this._radiusAdjusted = this._radius - (this._strokeWidth / 2)
    this._generateSvg()._generateText()._generateWrapper()
    this._el.innerHTML = ''
    this._el.appendChild(this._wrapContainer)
    return this
  },

  _setCss: function (dom, cssData) {
    for (var prop in cssData) {
      dom.style[prop] = cssData[prop]
    }
  },

  _setPercentage: function (percentage) {
    if (this._type === 'circle') {
      this._movingPath.setAttribute('d', this._calculatePath(percentage, true));
    } else if (this._type === 'rect') {
      this._movingPath.style.width = this._rectWidth * percentage / 100 + 'px';
    }
    this._textContainer.innerHTML = this._getText(this.getValueFromPercent(percentage));
  },

  _generateWrapper: function () {
    this._wrapContainer = document.createElement('div');
    this._wrapContainer.className = this._wrpClass;

    if (this._styleWrapper) {
      this._wrapContainer.style.position = 'relative';
      this._wrapContainer.style.display = 'inline-block';
    }
    this._wrapContainer.appendChild(this._svg);
    this._wrapContainer.appendChild(this._textContainer);
    return this;
  },

  _generateText: function () {
    this._textContainer = document.createElement('div')
    this._textContainer.className = this._textClass
    if (this._styleText) {
      var style = {
        position: 'absolute',
        top: 0,
        left: 0,
        textAlign: 'center',
        width: '100%',
        fontSize: (this._radius * 0.6) + 'px',
        height: this._svgSize + 'px',
        lineHeight: this._svgSize + 'px',
        color: this._textColor
      };
      this._setCss(this._textContainer, style)
    }

    this._textContainer.innerHTML = this._getText(0)
    return this
  },

  _getText: function (value) {
    if (!this._text) return ''

    if (value === undefined) value = this._value

    value = parseFloat(value.toFixed(2))

    return typeof this._text === 'function' ? this._text.call(this, value) : this._text
  },

  _generateSvg: function () {
    this._svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    this._svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    // 生成path or rect
    this._generatePath(100, false, this._colors[0], this._maxValClass)._generatePath(1, true, this._colors[1], this._valClass)
    if (this._type === 'circle') {
      this._svgWidth = this._svgHeight = this._svgSize
      this._movingPath = this._svg.getElementsByTagName('path')[1]
    } else if (this._type === 'rect') {
      this._svgWidth = this._rectWidth
      this._svgSize = this._svgHeight = this._rectHeight
      this._movingPath = this._svg.getElementsByTagName('rect')[1]
    }
    this._svg.setAttribute('width', this._svgWidth)
    this._svg.setAttribute('height', this._svgHeight)
    return this
  },

  _generatePath: function (percentage, open, color, pathClass) {
    let path,
      now = +new Date();
    if (this._gradientColor && open) {
      // 有渐变色
      this._svg.innerHTML += `<defs><linearGradient id="${now}" spreadMethod="pad">
                   <stop offset="0%" stop-color="${this._gradientColor[0]}" stop-opacity="${this._gradientOpacity[0]}"></stop>
                    <stop offset="100%" stop-color="${this._gradientColor[1]}" stop-opacity="${this._gradientOpacity[1]}"></stop>
                       </linearGradient></defs>`
    }
    if (this._type === 'circle') {
      path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      this._setCss(path, {
        'fill': 'transparent',
        'stroke': (this._gradientColor && open) ? `url(#${now})` : color,
        'stroke-width': this._strokeWidth
      })
      path.setAttribute('d', this._calculatePath(percentage, open))
      path.setAttribute('class', pathClass)
      this._circleLineCap && path.setAttribute('stroke-linecap', this._circleLineCap)
    } else if (this._type === 'rect') {
      path = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      let rectStyle = {
        'fill': (this._gradientColor && open) ? `url(#${now})` : color,
        'width': this._rectWidth * percentage / 100 + 'px',
        'height': this._rectHeight + 'px'
      }
      path.setAttribute('rx', this._rectRadius)
      path.setAttribute('ry', this._rectRadius)
      this._setCss(path, rectStyle)
    }
    this._svg.appendChild(path)
    return this
  },

  _calculatePath: function (percentage, open) {
    let end = this._start + ((percentage / 100) * this._circ),
      endPrecise = this._precise(end)
    return this._arc(endPrecise, open)
  },

  _arc: function (end, open) {
    let endAdjusted = end - 0.001,
      longArc = end - this._startPrecise < Math.PI ? 0 : 1

    return [
      'M',
      this._radius + this._radiusAdjusted * Math.cos(this._startPrecise),
      this._radius + this._radiusAdjusted * Math.sin(this._startPrecise),
      'A', // arcTo
      this._radiusAdjusted, // x radius
      this._radiusAdjusted, // y radius
      0, // slanting
      longArc, // long or short arc
      1, // clockwise
      this._radius + this._radiusAdjusted * Math.cos(endAdjusted),
      this._radius + this._radiusAdjusted * Math.sin(endAdjusted),
      open ? '' : 'Z' // close
    ].join(' ')
  },

  _precise: function (value) {
    return Math.round(value * 1000) / 1000
  },

  htmlifyNumber: function (number, integerPartClass, decimalPartClass) {
    integerPartClass = integerPartClass || 'circles-integer'
    decimalPartClass = decimalPartClass || 'circles-decimals'

    var parts = (number + '').split('.'),
      html = '<span class="' + integerPartClass + '">' + parts[0] + '</span>'

    if (parts.length > 1) {
      html += '.<span class="' + decimalPartClass + '" style="font-size: 0.45em">' + parts[1].substring(0, 2) + '</span>'
    }
    return html
  },

  getPercent: function () {
    return (this._value * 100) / this._maxValue
  },

  getValueFromPercent: function (percentage) {
    return (this._maxValue * percentage) / 100
  },

  getValue: function () {
    return this._value
  },

  update: function (value, duration) {
    if (value === true) {
      this._setPercentage(this.getPercent())
      return this
    }

    if (this._value == value || isNaN(value)) return this
    if (duration === undefined) duration = this._duration

    let self = this,
      oldPercentage = self.getPercent(),
      delta = 1,
      newPercentage, isGreater, steps, stepDuration;

    this._value = Math.min(this._maxValue, Math.max(0, value))

    if (!duration) {
      this._setPercentage(this.getPercent())
      return this
    }

    newPercentage = self.getPercent()
    isGreater = newPercentage > oldPercentage
    delta += newPercentage % 1
    steps = Math.floor(Math.abs(newPercentage - oldPercentage) / delta)
    stepDuration = duration / steps;


    (function animate (lastFrame) {
      if (isGreater) {
        oldPercentage += delta
      } else {
        oldPercentage -= delta
      }
      if ((isGreater && oldPercentage >= newPercentage) || (!isGreater && oldPercentage <= newPercentage)) {
        requestAnimFrame(function () {
          self._setPercentage(newPercentage)
        })
        return
      }

      requestAnimFrame(function () {
        self._setPercentage(oldPercentage)
      })

      var now = Date.now(),
        deltaTime = now - lastFrame;

      if (deltaTime >= stepDuration) {
        animate(now)
      } else {
        setTimeout(function () {
          animate(Date.now())
        }, stepDuration - deltaTime)
      }

    })(Date.now())

    return this
  }
};

vueProgress.create = function (options) {
  return new vueProgress(options);
};

export default vueProgress;