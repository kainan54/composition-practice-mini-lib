// and iffe to keep everything wrapped up for now
(function(global) {

    /* 
        -based on type-arg kds() will pass array-arg into corrosponding factory fn
        -fn factory should return data struct
        -appened to global(the window object for now) as d$()

    */
    const kds = function(type, array) {
        if (type === 'linkedList') return linkedListFactory(array);
    };

    const protos = {
        llNodeProto: {},
        llProto: {},
    };

    let { llNodeProto, llProto }  = protos;

    function llNodeFactory(value) {

        return Object.assign ( Object.create(llNodeProto), {

            val : value,
            next: null,

        });

    };

    function linkedListFactory(array) {

        const list = Object.assign( Object.create(llProto), {
            head: null,
            tail: null,
            length: array.length,
        });
        
        
        if(array.length < 1 ) return list;
        
        list.head = llNodeFactory(array[0]);
        
        let curr = list.head;

        for (let i = 1; i < array.length; i++) {

            curr.next = llNodeFactory(array[i]);
            curr = curr.next;
        };
        
        list.tail = curr;

        return list;
    };

    llProto = {

        push: function(value) {

            let node = llNodeFactory(value);

            if(!this.head) {

                this.head = node;
                this.tail = node;

            } else {

                this.tail.next = node;
                this.tail = node;

            };

            this.length++;
            return this;
        },

        pop: function() {

            if (!this.head) return undefined;

            this.length--;

            if (this.head === this.tail) {
                
                let removed = this.head;

                this.head = null;
                this.tail = null;

                return removed;


            } else {

                let curr = this.head.next;
                let prev = this.head;

                while(curr.next) {
                    prev = prev.next;
                    curr = curr.next;
                }
                this.tail = prev;
                this.tail.next = null;

                return curr;
            };
        },

        unshift: function(value) {
            let node = llNodeFactory(value);

            if(!this.head) {

                this.head = node;
                this.tail = node;

            } else {

                node.next = this.head;
                this.head = node;
            };

            this.length++;
            return this;
        },

        shift: function() {

            if (!this.head) return undefined;

            this.length--
            let removed = this.head;

            if (this.head === this.tail) {

                this.head = null;
                this.tail = null;

            } else {
                this.head = this.head.next;
            };

            removed.next = null;
            return removed;
        },

    };

    
    kds.ll = kds.bind(this, 'linkedList');
    global.d$ = kds;

} (window));