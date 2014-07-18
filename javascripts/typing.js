function Typing(opts) {
    this.version = '1.1';
    this.source = opts.source;
    this.output = opts.output;
    this.delay = opts.delay || 120;
    this.chain = {
        parent: null,
        dom: this.output,
        val: []
    }
}

Typing.fn = Typing.prototype = {
    toArray: function(eles) {
        //Array.prototype.slice;
        var result = [];
        for (var i = 0; i < eles.length; i++) {
            result.push(eles[i]);
        }
        return result;
    },
    init: function() {
        this.chain.val = this.convert(this.source, this.chain.val);
    },
    convert: function(dom, arr) {
        var that = this,
            children = this.toArray(dom.childNodes);

        children.forEach(function(node) {
            if (node.nodeType === 3) {
                arr = arr.concat(node.nodeValue.split(''));
            } else if (node.nodeType === 1) {
                var val = [];
                val = that.convert(node, val);
                arr.push({
                    'dom': node,
                    'val': val
                });
            }
        });

        return arr;
    },
    print: function(dom, val, callback) {
        setTimeout(function() {
            dom.appendChild(document.createTextNode(val));
            callback();
        }, this.delay);
    },
    play: function(ele) {
        if (!ele) return;
        if (!ele.val.length && ele.parent) this.play(ele.parent);
        if (!ele.val.length) return;

        var curr = ele.val.shift();
        var that = this;

        if (typeof curr === 'string') {
            this.print(ele.dom, curr, function() {
                if (ele.val.length) {
                    that.play(ele);
                } else if (ele.parent) {
                    that.play(ele.parent);
                }
            });
        } else {
            var dom = document.createElement(curr.dom.nodeName);
            var attrs = that.toArray(curr.dom.attributes);
            attrs.forEach(function(attr) {
                dom.setAttribute(attr.name, attr.value);
            });
            ele.dom.appendChild(dom);
            curr.parent = ele;
            curr.dom = dom;
            this.play(curr.val.length ? curr : curr.parent);
        }
    },
    start: function() {
        this.init();
        this.play(this.chain);
    }
}
