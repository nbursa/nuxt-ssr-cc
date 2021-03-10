import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'language',
  stateFactory: true,
  namespaced: true,
})
class Language extends VuexModule {
  language = 'en'

  @Mutation
  setLanguage(lang: string) {
    this.language = lang
  }

  get languageValue() {
    return this.language
  }
}
