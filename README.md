# pet-action
Github Action Example for managing Epic Issues in Pet projects

## Inputs

### `who-to-greet`

**Mandatory** The name of the person who greet.

## Outputs

### `time`

Time when greetings happen

## Example usage

uses: actions/pet-action@v1.1
with:
    who-to-greet: 'Mona the Octocat'
