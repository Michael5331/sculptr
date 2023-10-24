import "./styles.css";

export default function Card() {
  return (
    <div class="row">
      <div class="col-1-of-3">
        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--1">&nbsp;</div>
            <h4 class="card__heading">
              <span class="card__heading-span card__heading-span--1">
                Beginner program
              </span>
            </h4>
            <div class="card__details">
              <ul>
                <li>Improve fitness</li>
                <li>Lose weight</li>
                <li>Guided workouts</li>
                <li>Exercise stats</li>
                <li>Difficulty: easy</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back-1">
            <div class="card__cta">
              <div class="card__price-box">
                <p class="card__price-only"></p>
                <p class="card__price-value">Start training today!</p>
              </div>
              <a href="#popup" class="btn btn--white">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-1-of-3">
        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--2">&nbsp;</div>
            <h4 class="card__heading">
              <span class="card__heading-span card__heading-span--2">
                intermediate program
              </span>
            </h4>
            <div class="card__details">
              <ul>
                <li>Muscle specific</li>
                <li>Body type specific</li>
                <li>Create workouts</li>
                <li>Save workouts</li>
                <li>Difficulty: medium</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back-2">
            <div class="card__cta">
              <div class="card__price-box">
                <p class="card__price-only"></p>
                <p class="card__price-value">A new you is waiting</p>
              </div>
              <a href="#popup" class="btn btn--white">
                Create my login
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-1-of-3">
        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--3">&nbsp;</div>
            <h4 class="card__heading">
              <span class="card__heading-span card__heading-span--3">
                Experienced program
              </span>
            </h4>
            <div class="card__details">
              <ul>
                <li>Choose exercises</li>
                <li>Create workout</li>
                <li>Track your progress</li>
                <li>Earn badges!</li>
                <li>Difficulty: hard</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back-3">
            <div class="card__cta">
              <div class="card__price-box">
                <p class="card__price-only"></p>
                <p class="card__price-value">Get sculpted today</p>
              </div>
              <a href="#popup" class="btn btn--white">
                I want to get fit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
