import withConstructor from './with-constructor';

const pipe = function(...fns) {
    return function(x) {
        fns.reduce(function(y,f) {
            return f(y);
        }, x);
    }
}

const withFlying = function(o) {
    let isFlying = false;
    return {
        ...o,
        fly () {
            isFlying = true;
            return this;
        },
        land () {
            isFlying = false;
            return this;
        },
        isFlying: function() {
            return isFlying;
        }
    }
};

const withBattery = function({capacity}) {
    return function(o) {
        let percentCharged = 100;
        return {
            ...o,
            draw (percent) {
                const remaining = percentCharged - percent;
                percentCharged = remaining > 0 ? remaining : 0;
                return this;
            },
            getCharge: function() {
                return percentCharged;
            },
            getCapacity: function() {
                return capacity;
            }
        };
    };
};

const createDrone = function( { capacity = '3000mAh' } ) {
    pipe(
        withFlying,
        withBattery({ capacity }),
        withConstructor(createDrone)
    )({});
};

const myDrone = createDrone({ capacity: '5500mAh'});

console.log(`
    can fly: ${ myDrone.fly().isFlying() === true}
    can land: ${ myDrone.land().isFlying() === false}
    battery capacity: ${ myDrone.getCapacity()}
    battery status: ${ myDrone.draw(50).getCharge()} %
    battery drained: ${ myDrone.draw(75).getCharge()}% remaining
`);

console.log(`
    constructor linked: ${ myDrone.constructor === createDrone}
`);
    
