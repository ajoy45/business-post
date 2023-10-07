import React from 'react';

const Pagination = () => {
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul class="list-style-none flex">
                    <li>
                        <a
                            class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-[#5b6efd] transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white border border-[#dee2e6]"
                            href="#"
                            aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li>
                        <a
                            class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-[#5b6efd] transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white border border-[#dee2e6]"
                            href="#"
                        >1</a
                        >
                    </li>
                    <li aria-current="page">
                        <a
                            class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-[#5b6efd] transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white border border-[#dee2e6]"
                            href="#"
                        >2</a
                        >
                    </li>
                    <li>
                        <a
                            class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-[#5b6efd] transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white border border-[#dee2e6]"
                            href="#"
                        >3</a
                        >
                    </li>
                    <li>
                        <a
                            class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-[#5b6efd] transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white border border-[#dee2e6]"
                            href="#"
                        >4</a
                        >
                    </li>
                    <li>
                        <a
                            class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-[#5b6efd] transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white border border-[#dee2e6]"
                            href="#"
                        >5</a
                        >
                    </li>
                    <li>
                        <a
                            class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-[#5b6efd] transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white border border-[#dee2e6]"
                            href="#"
                        >6</a
                        >
                    </li>
                    
                    <li>
                        <a
                            class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white border border-[#dee2e6]"
                            href="#"
                            aria-label="Next"
                        ><span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;