export const getMonth = (month: number) => {
  switch (month) {
    case 0:
      return "januari";
    case 1:
      return "februari";
    case 2:
      return "maart";
    case 3:
      return "april";
    case 4:
      return "mei";
    case 5:
      return "juni";
    case 6:
      return "juli";
    case 7:
      return "augustus";
    case 8:
      return "september";
    case 9:
      return "october";
    case 10:
      return "november";
    case 11:
      return "december";
    default:
      return "";
  }
};
