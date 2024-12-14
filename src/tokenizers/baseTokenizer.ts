export const keywords: Set<string> = new Set([
    'if',
    'else',
    'elif',
    'for',
    'while',
    'def',
    'return',
    'import',
    'from',
    'as',
    'foreach',
    'switch',
    'case',
    'default',
    'break',
    'continue',
    'try',
    'catch',
    'finally',
    'throw',
    'async',
    'await',
    'class',
    'extends',
    'implements',
    'new',
    'this',
    'static',
    'namespace',
    'public',
    'private',
    'protected',
    'volatile',
    'synchronized',
    'interface',
    'native',
    'final',
    'abstract',
    'yield',
    'enum',
    'type',
    'public',
    'private',
    'protected',
    'in',
    'range'
]);

export const types: Set<string> = new Set([
    'int',
    'float',
    'bool',
    'string',
    'list',
    'dict',
    'tuple',
    'set',
    'class',
    'object',
    'module',
    'namespace',
    'let',
    'var',
    'const',
    'let',
    'var',
    'const',
    'array',
    'number'
]);

export const stringDelimiters: Set<string> = new Set([
    '\'',
    "'"
]);

export const commentSymbols: Set<string> = new Set([
    '#',
    '//'
]);

export const functionKeywords: Set<string> = new Set([
    'def',
    'function',
    'func',
    'fn',
    'lambda'
]);


export const classKeywords: Set<string> = new Set([
    'class',
    'interface',
    'struct'
]);


export const constants: Set<string> = new Set([
    'PI',
    'EULER',
    'MAX_VALUE',
    'MIN_VALUE',
    'const',
    'true',
    'false',
    'null',
    'undefined',
    'NaN',
]);

export const parameterIdentifiers: Set<string> = new Set([
    'arg',
    'param',
    'value'
]);

export const properties: Set<string> = new Set([
    'length',
    'size',
    'capacity',
    'name',
    'type',
    'value'
]);

export const arithmeticOperators: Set<string> = new Set([
    '+',    // Addition
    '-',    // Subtraction
    '*',    // Multiplication
    '/',    // Division
    '%',    // Modulus
    '**'    // Exponentiation
]);


export const incrementDecrementOperators: Set<string> = new Set([
    '++',   // Increment
    '--'    // Decrement
]);


export const comparisonOperators: Set<string> = new Set([
    '==',   // Equality
    '===',  // Strict equality
    '!=',   // Inequality
    '!==',  // Strict inequality
    '>',    // Greater than
    '<',    // Less than
    '>=',   // Greater than or equal to
    '<='    // Less than or equal to
]);


export const logicalOperators: Set<string> = new Set([
    '&&',   // Logical AND
    '||',   // Logical OR
    '!'     // Logical NOT
]);


export const ternaryOperator: Set<string> = new Set([
    '?',    // Ternary operator (conditional)
    ':'     // Ternary operator (conditional)
]);


export const assignmentOperators: Set<string> = new Set([
    '='     // Assignment
]);


export const groupingSymbols: Set<string> = new Set([
    '(',    // Opening parenthesis
    ')',    // Closing parenthesis
    '{',    // Opening curly brace
    '}',    // Closing curly brace
    '[',    // Opening square bracket
    ']'     // Closing square bracket
]);



export const separators: Set<string> = new Set([
    ',',    // Comma
    ';',    // Semicolon
    '.',    // Dot operator
    '...'   // Spread operator (JavaScript)
]);
