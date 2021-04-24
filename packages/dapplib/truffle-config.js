require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan reward stereo punch grace logic sugar spot'; 
let testAccounts = [
"0x9ebc2cafb57dad47ca92624546ac4ecd12f0f78ea687e23f811af0de67c4a6e1",
"0x3fe0051b51f1d93c2de268aa7ad5980cea16c41fc91c0b533279132c5a8ac897",
"0x76227782110259884cfc8cd7dbc1187d99ddee466cbb834f551c3afbbe7e2797",
"0xda60ff0328882906b1a511ca1960694392823f3e01836047284a86414176703e",
"0x034713b4f7a9abf04a2b5352d4572cfbb8b8e801c631c603489d93d78fb740b6",
"0x0aa27984e369110e7e37e02c737406e7392ad55533e09d985eac2a4dafbd0a91",
"0x19dec74fd1b195b81270692eca291fb40b239f72dfaf7f306d486c9f777c7e18",
"0xa0eaf16be0e5ef2b81e77a51f7366aa78367a4354ad547857a50e431c0846d71",
"0x74a04ba82872b62b9633d1a084e04fde1d1112320734e3a24ddaf186ef255212",
"0x2765937be3ff9cbd9dba753f41fed518a317e8e8ede2a0a670337aeaaa3676d3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
