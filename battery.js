(function(Scratch) {
    'use strict';

    // 拡張機能の名前
    const EXTENSION_NAME = 'MyCustomExtension';
    // 拡張機能のID
    const EXTENSION_ID = 'myCustomExtension';

    // ブロックの情報を定義
    const blocks = [
        {
            opcode: 'myCustomBlock',
            blockType: Scratch.BlockType.COMMAND,
            text: 'カスタムブロックを実行する',
            arguments: {},
        },
    ];

    // 拡張機能の情報を定義
    const info = {
        id: EXTENSION_ID,
        name: EXTENSION_NAME,
        blocks: reporter,
    };

    // 拡張機能のクラスを定義
    class MyCustomExtension {
        getInfo() {
            return info;
        }

        myCustomBlock() {
           navigator.getBattery().then(function(battery) {
var battery = battery.charging;
}); 
return battery;
        }
    }

    // 拡張機能を登録
    Scratch.extensions.register(new MyCustomExtension());

})(Scratch);
