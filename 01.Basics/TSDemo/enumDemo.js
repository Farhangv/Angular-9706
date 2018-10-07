var TrafficLights;
(function (TrafficLights) {
    TrafficLights[TrafficLights["Red"] = 0] = "Red";
    TrafficLights[TrafficLights["Yellow"] = 1] = "Yellow";
    TrafficLights[TrafficLights["Green"] = 2] = "Green";
})(TrafficLights || (TrafficLights = {}));
var trafficLight = TrafficLights.Red;
console.log(trafficLight);
