# Material UI

**`CssBaseline`**
**`Box`**
**`Grid`**
**`Stack`**
**`Select`**
**`DatePicker`**
**`Switch`**
**`Typography`**
**`Chip`**
**`Avatar`**
**`Alert`**
**`Progress`**

# UTILS

### CssBaseline

normalize.css 相当のことをやっている。html の head にスタイルが適用される。

# LAYOUT

### [Box](https://github.com/boston-terrier-kirin/react/blob/main/99_misc/17_mui-ts/src/components/layout/BoxExample.tsx)

なにも指定しなければ、ただの div。

```typescript
import { Box } from '@mui/material';

const BoxExample = () => {
  return <Box sx={{ height: '100px' }}>Box</Box>;
};

export default BoxExample;
```

### Grid

#### Grid container

flex-wrap: wrap になっていて、12 で折り返す仕組み。

#### spacing

- gap を使うと 12 カラムグリッドが崩れてしまうので、item に padding、container にマイナス margin をつけている。
- spacing=1 で、
  - item -> padding-left: 8px padding-top: 8px
  - container -> margin-left: -8px margin-top: -8px
- item の padding で container の上に余計なスペースができるのを防ぐためと思われる。

#### [GridExample.tsx](https://github.com/boston-terrier-kirin/react/blob/main/99_misc/17_mui-ts/src/components/layout/GridExample.tsx)

```typescript
const [showItemStyle, setShowItemStyle] = useState(true);

const itemStyle = {
  backgroundColor: '#f3f4f6',
  border: '1px solid #9ca3af',
};

const boxStyle = {
  backgroundColor: '#9ca3af',
  padding: '1rem',
};

return (
  <>
    <Grid container spacing={3}>
      <Grid item xs={8} sx={!showItemStyle ? itemStyle : {}}>
        <Box style={boxStyle}>xs=8</Box>
      </Grid>
      <Grid item xs={4} sx={!showItemStyle ? itemStyle : {}}>
        <div style={boxStyle}>xs=4</div>
      </Grid>
      <Grid item xs={4} sx={!showItemStyle ? itemStyle : {}}>
        <div style={boxStyle}>xs=4</div>
      </Grid>
      <Grid item xs={8} sx={!showItemStyle ? itemStyle : {}}>
        <div style={boxStyle}>xs=8</div>
      </Grid>
    </Grid>

    <Box sx={{ marginTop: '1rem' }}>
      <Button
        variant="outlined"
        onClick={() => setShowItemStyle(!showItemStyle)}
      >
        Show Padding & Margin
      </Button>
    </Box>
  </>
);
```

### [Stack](https://github.com/boston-terrier-kirin/react/blob/main/99_misc/17_mui-ts/src/components/layout/StackExample.tsx)

シンプルな flexbox。

```typescript
const StackExample = () => {
  return (
    <>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Box sx={{ border: 1, borderColor: 'primary.main', padding: '1rem' }}>
          TEST1
        </Box>
        <Box sx={{ border: 1, borderColor: 'primary.main', padding: '1rem' }}>
          TEST2
        </Box>

        <Stack
          sx={{ width: '100%' }}
          direction="row"
          justifyContent="space-between"
          spacing={2}
        >
          <Box sx={{ border: 1, borderColor: 'primary.main', padding: '1rem' }}>
            TEST1
          </Box>
          <Box sx={{ border: 1, borderColor: 'primary.main', padding: '1rem' }}>
            TEST2
          </Box>
        </Stack>
      </Stack>
    </>
  );
};
```

# INPUTS

### TextField

[TextInput.tsx](https://github.com/boston-terrier-kirin/react/blob/main/99_misc/17_mui-ts/src/components/inputs/TextInput.tsx)

### Select

[SelectInput.tsx](https://github.com/boston-terrier-kirin/react/blob/main/99_misc/17_mui-ts/src/components/inputs/SelectInput.tsx)

### DatePicker

[DateInput.tsx](https://github.com/boston-terrier-kirin/react/blob/main/99_misc/17_mui-ts/src/components/inputs/DateInput.tsx)

### Switch

- [SwitchInput.tsx](https://github.com/boston-terrier-kirin/react/blob/main/99_misc/17_mui-ts/src/components/inputs/SwitchInput.tsx)
- [TaskFooter.tsx](https://github.com/boston-terrier-kirin/react/blob/main/33_todo-ts/frontend/src/components/task/TaskFooter.tsx) - defaultChecked

# [DATA DISPLAY](https://github.com/boston-terrier-kirin/react/blob/main/99_misc/17_mui-ts/src/components/data-display/DataDisplay.tsx)

### Typography

```typescript
<Typography variant="h3" component="h1" gutterBottom>
  h1. Heading
</Typography>
```

### Chip

```typescript
<Chip variant="outlined" label="2023/2/21" />
```

### Avatar

```typescript
<Avatar
  sx={{
    width: '96px',
    height: '96px',
    backgroundColor: 'primary.main',
    marginBottom: '16px',
  }}
>
  <Typography variant="h4" color="text.primary">
    M
  </Typography>
</Avatar>
```

# [FEEDBACK](https://github.com/boston-terrier-kirin/react/blob/main/99_misc/17_mui-ts/src/components/feedback/Feedback.tsx)

### Alert

```typescript
<Alert severity="success" sx={{ width: '100%', marginBottom: '16px' }}>
  <AlertTitle>Success</AlertTitle>
  Task created successfully
</Alert>
```

```typescript
<Alert severity="error">There was an error fetching your tasks.</Alert>
```

### Progress

```typescript
<LinearProgress />
```

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

## もっと簡単にできることが判明

TextField の size を small にすれば OK。

```typescript
<LocalizationProvider dateAdapter={AdapterDateFns}>
  <DesktopDatePicker
    label="Task Date"
    inputFormat="yyyy/MM/dd"
    value={value}
    disabled={disabled}
    onChange={onChange}
    renderInput={(params) => <TextField {...params} size="small" />}
  />
</LocalizationProvider>
```
