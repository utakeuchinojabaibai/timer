navigator.getBattery().then(function(battery) {
  // バッテリー残量（0.0 - 1.0）
  const level = battery.level;

  // 充電中かどうか
  const charging = battery.charging;

  // フル充電までの時間（秒）
  const chargingTime = battery.chargingTime;

  // 充電切れまでの時間（秒）
  const dischargingTime = battery.dischargingTime;
});
