import skillJSON from 'src/skill.json'

/**
 * Get Skill Info
 * @param {string} name
 * @returns {({cost: string, tar: string, up_n1_array: string, icon: string, type: string, up_n2_array: string, out: string, act: string, sk_type: string, id: string, upgrade_eff_array: string, ele: string, desc: string}|{cost: string, tar: string, up_n1_array: string, icon: string, type: string, up_n2_array: string, out: string, act: string, sk_type: string, skill_eff_array: string, id: string, eff_num_array: string, upgrade_eff_array: string, ele: string, desc: string}|{cost: string, tar: string, up_n1_array: string, icon: string, type: string, up_n2_array: string, out: string, act: string, sk_type: string, skill_eff_array: string, id: string, eff_num_array: string, upgrade_eff_array: string, ele: string, desc: string}|{cost: string, tar: string, up_n1_array: string, icon: string, type: string, up_n2_array: string, out: string, act: string, sk_type: string, id: string, upgrade_eff_array: string, ele: string, desc: string}|{cost: string, tar: string, up_n1_array: string, icon: string, type: string, up_n2_array: string, out: string, act: string, sk_type: string, id: string, upgrade_eff_array: string, ele: string, desc: string})[]}
 */
function getSkillByGeneName(name) {
  return skillJSON.filter((val) => {
    return val.out === name
  })
}

export {
  getSkillByGeneName
}
