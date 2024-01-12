import React from 'react';
import './style.css';

function NeumorphismForm() {
  return (
    <div class="container">
      <div class="form-box">
        <div class="form-information">
          <h3 class="form-title">Web Development</h3>
        </div>

        <div class="form-wrapper">
          <div class="form-input">
            <span class="form-input-icon">
              <svg
                class="icon"
                viewBox="0 0 512 512"
                width="12"
                title="user-alt"
              >
                <path
                  d="M256 288c79.5 0 
                    144-64.5
                    144-144S335.5
                    0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"
                />
              </svg>
            </span>
            <span>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="username"
              />
            </span>
          </div>

          <div class="form-input">
            <span class="form-input-icon">
              <svg class="icon" viewBox="0 0 448 512" width="12" title="lock">
                <path d="M400 224h-24v-72C376
                 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" />
              </svg>
            </span>

            <span>
              <input
                type="text"
                id="password"
                name="password"
                placeholder="password"
              />
            </span>
          </div>

          <div>
            <button class="login-button">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeumorphismForm;
