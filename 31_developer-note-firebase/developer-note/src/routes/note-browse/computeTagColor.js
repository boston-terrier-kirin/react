export function computeTagColor(noteList, colorMap) {
  // map[key:tag, value:cnt]
  const map = new Map();
  for (const note of noteList) {
    // tagなしは無視する
    if (!note.tags) {
      continue;
    }

    // 複数のtagがついている場合あり
    note.tags.split(',').forEach((tag) => {
      const cnt = map.get(tag) || 0;
      map.set(tag, cnt + 1);
    });
  }

  // ソートしたいので、配列に入れる
  const tagRank = [];
  for (const m of map) {
    // m[0]:tag, m[1]:cnt
    tagRank.push(m);
  }

  // ソート
  tagRank.sort((a, b) => {
    // m[1]:cnt でソート
    if (a[1] > b[1]) {
      return -1;
    }
    return 1;
  });

  // objectに詰めなおす
  // {
  //   react: {backgroundColor:'#3b82f6', color:'#f9fafb', cnt:3 },
  //   javascript: {backgroundColor:'#16a34a', color:'#f9fafb', cnt:3 }
  // }
  const tagColorMap = {};

  for (const [index, tag] of tagRank.entries()) {
    tagColorMap[tag[0]] = {
      backgroundColor:
        index < 10
          ? colorMap[index].backgroundColor
          : colorMap[10].backgroundColor,
      color: index < 10 ? colorMap[index].color : colorMap[10].color,
      cnt: tag[1],
    };
  }

  return tagColorMap;
}
