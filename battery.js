myCustomBlock() {
           navigator.getBattery().then(function(battery) {
var battery = battery.charging;
}); 
return battery;
        }
window.ScratchExtensions.register('Weather Info Extension', {
    blocks: [
        {
            opcode: 'myCustomBlock',
            blockType: 'reporter',
            text: 'battery',
        },
    ],
    execute() {
        return getWeather();
    },
});
