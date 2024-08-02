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
    acc[curr.campeao] = (acc[curr.campeao] || 0) + 1;
    return acc;
  }, {});

  const sortedWinners = Object.entries(winners)
    .map(([team, wins]) => ({ team, wins }))
    .sort((a, b) => b.wins - a.wins);

  return sortedWinners;
};
