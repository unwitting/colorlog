import React from 'react'

import Link from './Link.jsx'

import css from './Intro.css'

const TRAVEL_LOG = 'N4IgzghgbgpgJiAXCATABgIwDYC0aU7YAqaAnIgCzkDMWAdJtQFogA0IcEALhEqAMYB7ADaCATmCQBtUAAsYADyQgAogCFqKFADE2ILoq7Ki8gARCArgDsuYgJ4ByMKavcAloNfDzI8XVMmblYA1qayEFYA5kGRpgBGEVYwEqYA7m5csmEQALY5yc4RcKZgbvzBwjBgdCAAvqxyisraKCoAIioYegYKRsgAgmmyGTCpEGBZFmDwpgAOyVDjbrDCdqaeaRDCws5BpXAwpkXrFlz+APIAZgZWJTxBM+mZ8cIQ5aaZYoIWkVkQkTAavVGkpkCoABxqADCGAArN1DMo1DBkq9BDgwLNPGBxDNSlFnFMZnE1mIqjwLGIIlwwKwSrJBLNafEIBI6XZvi5cocMnTXFwPFZ0gcgQ0QPJQSAoaQKNoMCoEb1jGYxFMuDgycVBJdTAAZCCCUxwNxiM6mADq8luGXM3H48mcmUOYGs0y4pmEbl+7oyTlMOX+ZVFIOUKAwAHZYWgoYq+iBdVNZHThInTLAATwBZ5-IEQqYYFY4JUwIVC2nxu6ct8bBA9j5YJrTEE0oJBHBqnUALrsHpxgCyMCrYjcVXWOv1gkk7CJYmU1lSXC4UT0swscU9E3gSFsFhgtVqQA'
const JOURNAL = ''
const REMEMBER = ''

export default function Intro(props) {
  return (
    <div className={css.intro}>
      <p className={`${css.paragraph} ${css.title}`}>Welcome to Colorlog</p>
      <p className={css.paragraph}>
        A new way to <Link highlight={true} href={`/?data=${TRAVEL_LOG}`}>travel log</Link>
        , to journal, simply to remember.
      </p>
      <p className={css.paragraph}>Just a set of colors, and a little description of each, to bring everything flooding back.</p>
    </div>
  )
}
