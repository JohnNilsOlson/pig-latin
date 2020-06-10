# _Leap Year_

#### _Calculate Leap Year, 6/10/20_

#### By _**Joseph Pearce**__**JohnNils Olson**___**Tristen Emerson**_

## Description

1. non-alphabetical character
operation: nothing
input: 3
output: 3

2. word begins in vowel
operation: add 'way' to end
input: errand
output: errand'way'

3. word begins with consonant
operation: move first letter to end and add 'ay'
input: boy
output: oybay

4. word begins w/ consonants
operation: move consecutive consonants to end and add 'ay'
input: trumpet
output: umpet'tr''ay'

5. word begins with 'qu'
operation: move 'qu' to end and add 'ay'
input: question
output: estion'qu''ay'

6. word begins with (x)qu
operation: move first consonant and 'qu' to end and add 'ay'
input: squeal
output: eal'squ''ay'

7. word begins with 'y'
operation: treat 'y' as consonant
input: yarn
output: arn'y''ay'

8. multiple word sentences
operation: include all words within string
input: hello world
output: ello'h''ay'

9. handle punctuation
operation: keep punctuation in-tact
input: hello world!
output: ello'h''ay' orld'w''ay'!

10. sentence casing
operation: use correct sentence casing
input: Hello world!
output: 'E'llo'h''ay' orld'w''ay'!

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_



## Known Bugs

_No Known Bugs_


## Technologies Used

_html_
_css_
_JavaScript_
_jQuery_


### License


Copyright (c) 2016 **_Joseph Pearce_**


behavior - plain english	operation	input	output
word begins in vowel	add 'way' to end	errand	errandway
word begins with consonant(s)	move consecutive consonant to end	trumpet	umpettray
consonant prefix includes (qu)	move qu to end	question	estionquay
	move qu to end	squeal	ealsquay
word begins with y	y is consonant	yarn	arnyay