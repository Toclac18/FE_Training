const Validation = (
    function() {
        function isEmpty(value) {
            return value === undefined || value === null || value.trim() === " ";
        }

        return {
            isEmpty: isEmpty
        }
    }
)();
export default Validation;