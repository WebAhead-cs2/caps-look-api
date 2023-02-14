const logout = async (req, res) => {
  try {
    res.clearCookie('userToken')
    res.json('logged out')
  } catch {
    res.status(500).json(`failed to logout`)
  }
}
module.exports = { logout }
