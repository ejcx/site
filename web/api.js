const tmpl = require('./tmpl.js');
const esc = require('lodash.escape');

function serve(res, fname) {
  return res.sendFile(fname, {root:'web/static'});
}

async function index(req, res) {
  return serve(res, "index.html")
}

async function blog(req, res) {
  return serve(res, "blog.html")
}

async function misconfiguredcors(req, res) {
  return serve(res, "misconfiguredcors.html")
}

async function misconfiguredcors(req, res) {
  return serve(res, "misconfiguredcors.html")
}

async function keybase(req, res) {
  return serve(res, "keybase.html")
}

async function crashingsafari(req, res) {
  return serve(res, "crashingsafari.html")
}

async function contact(req, res) {
  return serve(res, "contact.html")
}

module.exports = {
  crashingsafari: crashingsafari,
  keybase: keybase,
  misconfiguredcors: misconfiguredcors,
  keybase: keybase,
  blog: blog,
  contact: contact,
  index: index,
};
