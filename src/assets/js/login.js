// 密码验证规则
const rules = {
  isUsername: [/^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{4,10}$/, '用户名长度4-10位'],
  isPassword: [/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,18}$/, '请输入6-18位英文字母、数字或者符号且至少包含两种'],
  isEmail: [/^([a-zA-Z0-9]+[-_\\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/, '请输入正确格式的邮箱']
}
// 校验用户名
var rulesUsername = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('用户名不能为空'))
  } else if (!rules.isUsername[0].test(value) && !rules.isPassword[0].test(value)) {
    callback(new Error('请输入 6-18的字母与数字组合 或 正确格式的邮箱'))
  }
}
// 校验密码
var rulesPassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('密码不能为空'))
  } else if (!rules.isPassword[0].test(value)) {
    callback(new Error(rules.isPassword[1]))
  }
}
// 校验邮箱
var rulesEmail = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('邮箱不能为空'))
  } else if (!rules.isEmail[0].test(value)) {
    callback(new Error(rules.isEmail[1]))
  }
}
export {
  rules, rulesUsername, rulesPassword, rulesEmail
}
