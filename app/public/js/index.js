
const SomeApp = {
  data() {
    return {
      referees: [],
      selectedReferee: null,
      games: [],
      gameForm: {},
      selectedGame: null,
      refereeForm: {}
    }
  },
  computed: {},
  methods: {
      prettyData(d) {
          return dayjs(d)
          .format('D MMM YYYY h:mm A')
      },
      prettyDollar(n) {
          const d = new Intl.NumberFormat("en-US").format(n);
          return "$ " + d;
      },
      selectReferee(r) {
          if (r == this.selectedReferee) {
              return;
          }
          this.selectedReferee = r;
          this.games = [];
          this.fetchGameData(this.selectedReferee);
      },
      
      fetchRefereeData() {
          fetch('/api/referee/')
          .then( response => response.json() )
          .then( (responseJson) => {
              console.log(responseJson);
              this.referees = responseJson;
          })
          .catch( (err) => {
              console.error(err);
          })
          
      },
      fetchGameData(r) {
          console.log("Fetching game data for ", r);
          fetch('/api/game/?referee=' + r.id)
          .then( response => response.json() )
          .then( (responseJson) => {
              console.log(responseJson);
              this.games = responseJson;
          })
          .catch( (err) => {
              console.error(err);
          });
    },
   
      postGame(evt) {
        if (this.selectedGame === null) {
            this.postNewGame(evt);
        } else {
            this.postEditGame(evt);
        }
      },
      postNewGame(evt) {
        this.gameForm.rid = this.selectedReferee.id;
        //this.gameForm.gid = this.;
        console.log("Creating!", this.gameForm);

        fetch('api/game/create.php', {
            method:'POST',
            body: JSON.stringify(this.gameForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.games = json;
            

            // reset the form
            this.resetGameForm();
          })
          .catch( err => {
            alert("Something went horribly wrong!");
          });
      },
      postNewReferee(evt) {
        //this.gameForm.referee_id = this.selectedReferee.id;
        this.refereeForm.gid = this.selectedGame.id;
        console.log("Creating!", this.refereeForm);

        fetch('api/game/create.php', {
            method:'POST',
            body: JSON.stringify(this.refereeForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.referees = json;

            // reset the form
            this.resetGameForm();
          })
          .catch( err => {
            alert("Something went horribly wrong!");
          });
      },
      postEditGame(evt) {
        this.gameForm.id = this.selectedReferee.id;
        //this.gameForm.id = this.selectedGame.id;

        console.log("Updating!", this.gameForm);

        fetch('api/game/update.php', {
            method:'POST',
            body: JSON.stringify(this.gameForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.games = json;

            // reset the form
            this.resetGameForm();
          });
      },
      postDeleteGame(g) {
        if (!confirm("Are you sure you want to delete this game?" )) {
          return;
        }
        console.log("Delete!", g);

        fetch('api/game/delete.php', {
            method:'POST',
            body: JSON.stringify(g),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.games = json;

            // reset the form
            this.resetGameForm();
          });
      },
      selectGameToEdit(g) {
          this.selectedGame = g;
          this.gameForm = Object.assign({}, this.selectedGame);
      },
      resetGameForm() {
          this.selectedGame = null;
          this.gameForm = {};
      }
  },
  created() {
      this.fetchRefereeData();
  }

}

Vue.createApp(SomeApp).mount('#refereeApp');
