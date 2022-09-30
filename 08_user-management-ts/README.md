# TypeError: Cannot assign to read only property 'jsx' of object の解決方法

起動時にエラーが発生する場合は、[ここ](https://qiita.com/gozan/items/54fb5886439775f20d93) を参考にして、
/node_modules/react-scripts/scripts/utils/verifyTypeScriptSetup.js を修正する。

```修正前
238: } else if (parsedCompilerOptions[option] !== valueToCheck) {
```

```修正後
238: } else if (parsedCompilerOptions[option] !== valueToCheck && option !== "jsx") {
```
