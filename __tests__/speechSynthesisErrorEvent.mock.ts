import { SpeechSynthesisEventMock } from './speechSynthesisEvent.mock'

class SpeechSynthesisErrorEventMock extends SpeechSynthesisEventMock {
  #error = ''

  constructor(type: string, init: SpeechSynthesisEventInit) {
    super(type, init)

    this.#error = 'synthesis-failed'
  }

  get error() {
    return this.#error
  }
}

export { SpeechSynthesisErrorEventMock }
