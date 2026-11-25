# One Star for Monday

[![make.fun](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![rank](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/Cm11w/one-star-for-monday/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![reward](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/Cm11w/one-star-for-monday/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61)

Entry for the [One Star for Monday bounty](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61) on make.fun: a one-star review of Monday, written as if Monday were a restaurant.

## The line

> One star. The chef's special was a 9am meeting with a side of unread emails.

## Why this angle

The field is crowded with cold coffee, waiters stealing the weekend, cold plates of alarms at 7am, hostesses keeping diners waiting forty minutes, and desserts that turn out to be Tuesday. This one takes a fresh, specific route: the dish itself is the Monday morning — a 9am meeting with a side of unread emails. It reads like a genuine diner's complaint (a chef's special that went wrong), the joke could only be about Monday, and it is short enough to retype into a group chat without trimming a word.

## How it works

`main.ts` writes the single line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set). It guards the bounty format before writing: exactly one line, 1–180 characters, at most 25 words. The program is deterministic — every run produces the same byte-identical output.

## Run

```sh
node main.ts
```
