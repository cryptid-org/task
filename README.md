# Task

Task runner for CryptID.

## Motivation

CryptID is a library written in multiple languages with lots of task to perform: creating builds to different architectures using different compilers, testing, coverage reporting and so on.

Of course, we could use (for example) `make` for the C part and `gulp` for the JS part, but we're sick and tired of using a plethora of different tools. Thus, we employed [substack's ./task.js approach](https://gist.github.com/substack/8313379): a simple JS script for each task.

However, there are some common code that we would like to share, and also dependencies we would like to use, therefore we've created a very basic foundation: **Task**.

Task is not a sophisticated task runner. It just executes scripts and provides a comfortable yargs-based CLI.

## Usage

Just call `npx task <commands and arguments>` in an appropriate repository root.

In CryptID repositories, you can also use `./task <...>` or `task.bat <...>`.

## Writing Task tasks

### Commands

Task searches for commands in the `.task/cmd` directory. Commands are simple yargs commands.

### Injecting data

Custom data can be injected into command handlers by supplying an `.task/inject.js` script exporting the data to be injected.

### Example

Please refer to the [example](example) directory for code using task.
