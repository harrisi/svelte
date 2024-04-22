import { test } from '../../test';

export default test({
	error: {
		code: 'invalid_dollar_prefix',
		message: 'The $ prefix is reserved, and cannot be used for variables and imports'
	}
});
