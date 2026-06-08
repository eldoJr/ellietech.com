import { useState, useRef, useCallback, useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavDropdownProps {
    label: string;
    href?: string;
    children: ReactNode;
}

export default function NavDropdown({ label, href = '#', children }: NavDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [panelTop, setPanelTop] = useState(0);
    const [headerWidth, setHeaderWidth] = useState('100%');
    const [headerLeft, setHeaderLeft] = useState(0);
    const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    const open = useCallback(() => {
        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
        }
        setIsOpen(true);
    }, []);

    const close = useCallback(() => {
        closeTimeout.current = setTimeout(() => {
            setIsOpen(false);
        }, 150);
    }, []);

    useEffect(() => {
        if (!isOpen || !triggerRef.current) return;

        let rafId: number;
        const updatePosition = () => {
            const header = triggerRef.current?.closest('header');
            if (header) {
                const rect = header.getBoundingClientRect();
                setPanelTop(rect.bottom + 8);
                setHeaderWidth(`${rect.width}px`);
                setHeaderLeft(rect.left);
            }
            rafId = requestAnimationFrame(updatePosition);
        };

        rafId = requestAnimationFrame(updatePosition);
        return () => cancelAnimationFrame(rafId);
    }, [isOpen]);

    return (
        <div
            ref={triggerRef}
            className="relative flex items-stretch h-full"
            onMouseEnter={open}
            onMouseLeave={close}
        >
            <a
                href={href}
                className={`flex items-center gap-1 text-sm transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-text-secondary hover:text-text-primary'}`}
                onFocus={open}
                onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                        setIsOpen(false);
                        (e.target as HTMLElement).blur();
                    }
                }}
            >
                {label}
                <svg
                    className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </a>

            {/* Orange underline */}
            <motion.span
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
                initial={false}
                animate={{ scaleX: isOpen ? 1 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />

            {/* Dropdown panel */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Invisible bridge between trigger and panel to prevent hover loss */}
                        <div
                            className="fixed z-[199]"
                            style={{ top: panelTop - 8, left: headerLeft, width: headerWidth, height: 8 }}
                            onMouseEnter={open}
                        />
                        <motion.div
                            className="fixed z-[200] overflow-hidden rounded-lg backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border border-white/20 dark:border-gray-700/30 shadow-lg"
                            style={{ top: panelTop, left: headerLeft, width: headerWidth }}
                            initial={false}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            onMouseEnter={open}
                            onMouseLeave={close}
                        >
                            <div className="px-6 md:px-8 py-8">
                                {children}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
