interface SortedGenres {
  name: string;
  count: number;
}

const sortGenres = (genres: string[]) => {
  const sorted = genres.sort();
  const sortedGenres: SortedGenres[] = [];

  for (let genre of sorted) {
    const alreadyExists = sortedGenres.some(
      (sortedGenre) => sortedGenre.name === genre
    );
    if (!alreadyExists) {
      sortedGenres.push({ name: genre, count: 1 });
    } else {
      const element = sortedGenres.find(
        (sortedGenre) => sortedGenre.name === genre
      );
      if (element) {
        const index = sortedGenres.indexOf(element);
        sortedGenres[index].count++;
      }
    }
  }
  const response = sortedGenres.sort(({ count: a }, { count: b }) => {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  });
  return response;
};

export default sortGenres;
