export default {
    increment (state) {
        state.count++
    },
    decrement (state) {
        state.count--
    },
    unfixFooter (state, value) {
        state.footerUnfixed = value;
    },
}