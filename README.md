### Illustration of `test.each` performance

1. clone the repo
2. `yarn install`
3. `yarn test` and observe time
4. comment out the `it.each` block
5. `yarn test` and observe time

#### Conclusion
Run time does not scale proportionally when increasing `test`/`it` calls vs. increasing `expect` calls only. One `test`/`it` block with 1,000 `expect` calls will execute faster than 1,000 `test`/`it` blocks with one `expect` call each.
