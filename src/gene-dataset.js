import geneJSON from "src/gene.json";

function getGeneMap(
  typeFilter = null,
  eleFilter = null,
  sizeFilter = null,
  nameKey = null
) {
  const geneMap = [];
  geneJSON.forEach((val) => {
    if (typeFilter && eleFilter) {
      if (typeFilter === val.type && eleFilter === val.element)
        geneMap.push(val);
    } else if (typeFilter || eleFilter) {
      if (typeFilter === val.type || eleFilter === val.element)
        geneMap.push(val);
    } else geneMap.push(val);
  });
  const tempGeneArr = sizeFilter
    ? geneMap.filter((val) => {
        return val.id.indexOf(`【${sizeFilter}】`) !== -1;
      })
    : geneMap;

  return nameKey
    ? tempGeneArr.filter((val) => {
        return (
          val.id.indexOf(nameKey) !== -1 ||
          val.skill_desc.indexOf(nameKey) !== -1
        );
      })
    : tempGeneArr;
}

export { getGeneMap };
