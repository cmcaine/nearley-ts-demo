import * as nearley from 'nearley'
import * as bracketexpr_grammar from './bracketexpr'

const bexpr_parser = new nearley.Parser(nearley.Grammar.fromCompiled(bracketexpr_grammar))

bexpr_parser.feed('<C-u>')
console.log(bexpr_parser.results[0])
