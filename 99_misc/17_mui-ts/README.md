# @mui/x-date-pickers の padding を変更する

sx を使って、力業で微調整は可能。

- .MuiInputBase-input で、サイズ感を TextField と同じにする。
- .MuiInputLabel-formControl で、ラベルの位置を微調整。
- .MuiInputLabel-shrink で、フォーカスした時のラベルの位置を微調整。

#### [DateInput.tsx](https://github.com/boston-terrier-kirin/react/blob/main/99_misc/17_mui-ts/src/components/inputs/DateInput.tsx)

```typescript
<LocalizationProvider dateAdapter={AdapterDateFns}>
  <DesktopDatePicker
    label={label}
    inputFormat="yyyy/MM/dd"
    value={value}
    disabled={disabled}
    onChange={onChange}
    renderInput={(params) => (
      <TextField
        {...params}
        sx={{
          '.MuiInputBase-input': {
            padding: '8.5px 14px',
          },
          '.MuiInputLabel-formControl': {
            top: '-8.5px',
          },
          '.MuiInputLabel-shrink': {
            top: '0',
          },
        }}
      />
    )}
  />
</LocalizationProvider>
```
