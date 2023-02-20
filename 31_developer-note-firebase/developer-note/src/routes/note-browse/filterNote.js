export function filterNote(noteList, filterNoteByTag, filterNoteByTitle) {
  return noteList.filter((note) => {
    let match = false;

    if (filterNoteByTag === 'FAVORITE') {
      // (1) タグが多いので、まずはタグを検索する。
      // (2) タグをクリックして、タグで絞り込む。
      // (3) 絞り込んだタグの中で、タイトルで絞り込む。
      match = note.favorite;

      // favoriteで絞り込んだ後、さらにタイトルで絞り込む。
      if (filterNoteByTitle) {
        if (
          note.title?.toUpperCase().includes(filterNoteByTitle.toUpperCase())
        ) {
          match = true;
        } else {
          match = false;
        }
      }

      return match;
    }

    if (filterNoteByTag === 'DRAFT') {
      // (1) タグが多いので、まずはタグを検索する。
      // (2) タグをクリックして、タグで絞り込む。
      // (3) 絞り込んだタグの中で、タイトルで絞り込む。
      match = note.draft;

      // favoriteで絞り込んだ後、さらにタイトルで絞り込む。
      if (filterNoteByTitle) {
        if (
          note.title?.toUpperCase().includes(filterNoteByTitle.toUpperCase())
        ) {
          match = true;
        } else {
          match = false;
        }
      }

      return match;
    }

    if (note.tags?.toUpperCase().includes(filterNoteByTag.toUpperCase())) {
      match = true;

      // tagで絞り込んだ後、さらにタイトルで絞り込む。
      if (filterNoteByTitle) {
        if (
          note.title?.toUpperCase().includes(filterNoteByTitle.toUpperCase())
        ) {
          match = true;
        } else {
          match = false;
        }
      }
    }

    return match;
  });
}
