module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '84ec420dd4936f157b15e8b1dae0658c'),
  },
});
