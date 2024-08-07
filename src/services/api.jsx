export const fetchCBD = async () => {
  const response = await fetch('/cdb.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

export const fetchTopWinners = async () => {
  const data = await fetchCBD();

  const winners = data.reduce((acc, curr) => {
    if (!acc[curr.campeao]) {
      acc[curr.campeao] = { wins: 0, years: [], img: curr.imgCampeao };
    }
    acc[curr.campeao].wins += 1;
    acc[curr.campeao].years.push(curr.ano);
    return acc;
  }, {});

  const sortedWinners = Object.entries(winners)
    .map(([team, { wins, years, img }]) => ({ team, wins, years, img }))
    .sort((a, b) => b.wins - a.wins);

  return sortedWinners;
};

export const fetchTopVices = async () => {
  try {
      const response = await fetch('/cdb.json');
      const data = await response.json();

      const viceCounts = {};

      data.forEach(item => {
          if (item.vice) {
              if (!viceCounts[item.vice]) {
                  viceCounts[item.vice] = {
                      count: 0,
                      anos: [],
                      escudo: item.imgVice
                  };
              }
              viceCounts[item.vice].count += 1;
              viceCounts[item.vice].anos.push(item.ano);
          }
      });

      const sortedVices = Object.entries(viceCounts).sort((a, b) => b[1].count - a[1].count);
      return sortedVices.map(([vice, { count, anos, escudo }]) => ({ vice, count, anos, escudo }));
  } catch (error) {
      console.error('Erro ao buscar dados dos vices:', error);
      return [];
  }
};
