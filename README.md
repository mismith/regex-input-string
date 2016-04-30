# regex-input-string

Augment a user-input string into a regular expression.

## Usage

`new RegexInputString(input: String, flags: String = ''): RegExp`

### Simple strings
    let r1 = new RegexInputString('either an? (escaped) string');
    // r1 === /either an\? \(escaped\) string/

### Regex strings
    let r2 = new RegexInputString('/^or an (improved|augmented) regexp? string/ig');
    // r2 === /^or an (improved|augmented) regexp? string/ig

### Filtering
Useful for filtering items based on a text input (where advanced users can perform regex searches), e.g.

    <input value="/^regexp? query$/ig" />

    inputEl.addEventListener('input', e => {
        let filter   = new RegexInputString(e.target.value, 'i')),
            filtered = items.filter(item => filter.test(item.name));
    });