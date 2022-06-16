import React from 'react'
import './languages.css'

const Languages = () => {
  return (
    <div class="additional-info__languages">
      <h3 class="additional-info__languages-header">Languages</h3>
      <p class="additional-info__languages-item">
        English (you figured out by now)
      </p>
      <p class="additional-info__languages-item">
        Ukrainian <span class="spoiler-text">(батько наш Бандера)</span>
      </p>
      <p class="additional-info__languages-item ">
        Japanese (<span title="yeah, seriously" class="text-hint">うん、まじ</span>)
      </p>
    </div>
  )
}

export default Languages