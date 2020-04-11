export const state = () => ({
  drawer: false,
  fixed: false
})

export const mutations = {
  set_drawer(state, newDrawerState) {
    console.log('SETTING DRAWER TO', newDrawerState)
    state.drawer = newDrawerState
  },
  set_fixed(state, newFixedState) {
    console.log('SETTING DRAWER TO', newFixedState)
    state.fixed = newFixedState
  }
}
