import '@testing-library/jest-dom/extend-expect';
import MutationObserver from '@sheerun/mutationobserver-shim';
import 'jest-localstorage-mock';

window.MutationObserver = MutationObserver;
