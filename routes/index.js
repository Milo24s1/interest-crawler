const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const interestController = require('../src/controller/interestController');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>{

    interestController.dashboard(req, res);
  //   res.render('dashboard', {
  //       user: req.user,
  //
  // })
  }
);
// Fb Login
router.get('/fblogin',  (req, res) =>{
        interestController.demoTest(req,res);
    }
);

//Callback
router.get('/callback/',  (req, res) =>
    interestController.fbRedirectHandle(req,res)
);

//Search
router.get('/search',  (req, res) =>{
     res.render('search');
    }
);
//Search
router.post('/searchInterest',(req,res)=>{
    interestController.fbInterestAPICall(req,res);
});

module.exports = router;
