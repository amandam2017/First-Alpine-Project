document.addEventListener('alpine:init', () => {
    Alpine.data('counter', () => ({
        countdown: 60,
        token: null,
        count: '',
        init() {
            this.startCounter();
            console.log('Welcome to Alpine App');
            
        },
        startCounter() {
            this.count = setInterval(() => {
                if (this.countdown > 0) {
                    this.countdown--;

                }

            }, 1000);

        },

        

        stop() {
            clearInterval(this.count);
            console.log('Lol, this is fun being here', this.countdown);
        },

        reset() {
            clearInterval(this.count);
            this.countdown = 60;
        }


    }))
})


// const obj = {
//     total: 12.99,
//     qty: 2,
//     getTotal() {
//         this.total * this.qty;
//     }
// }