const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

class Stopwatch extends React.Component {
    constructor(display) {
        super(display);
        this.setState = {
            display: ''
        }
        this.running = false;
        this.display = display;
        //this.handleOnClick = this.handleOnClick.bind(this);
        this.reset();
        this.print(this.times);
    }

    reset() {
        this.running = false;
        
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
        
        this.print();
    }

    print() {
        this.setState = this.format(this.times);
    }


    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    step() {
        if (!this.running) return;
        this.calculate();
        this.print();
    }

    calculate() {
        this.times.miliseconds += 1;

        if (this.times.miliseconds >= 100) {
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }

        if(this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }

    stop() {
        this.running = false;
        clearInterval(this.watch);
    }

    /*
    handleOnClick(e) {
        this.setState( {
            if(startButton) {
                stopwatch.start();
            } else if(stopButton) {
                stopwatch.stop();
            } else if(resetButton) {
                stopwatch.reset();
            }
        });
    }
    */

    render() {
       return (
           <div>
                <Stopwatch />
           </div>
       );
    }
}

function pad0(value) {
    let result = value.toString();

    if (result.length < 2) {
        result = '0' + result;
    } 
    return result;
}

const stopwatch = React.createElement(Stopwatch);
ReactDOM.render(stopwatch, document.querySelector('.stopwatch'));