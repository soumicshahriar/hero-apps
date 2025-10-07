export const averageRating = (ratings) => {
  if (!ratings || ratings.length === 0) return 0;
  let totalScore = 0;
  let totalCount = 0;
  ratings.forEach((rating) => {
    const star = parseInt(rating.name[0]);
    totalScore += star * rating.count;
    totalCount += rating.count;
  });

  return (totalScore / totalCount).toFixed(2);
};

export const formatDownloads = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
};
