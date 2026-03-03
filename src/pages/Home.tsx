export function Home() {
  return (
    <>
      <header className="border-b border-[var(--color-warm-border)] bg-[var(--color-warm-bg)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 md:py-5">
          <p className="text-lg sm:text-xl font-semibold text-[var(--color-warm-text)] tracking-tight">
            OpenClaw
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
        <section className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-warm-text)] mb-2 sm:mb-3">
            OpenClaw 远程安装服务
          </h1>
          <p className="text-[var(--color-warm-text-muted)] text-base sm:text-lg max-w-xl mx-auto px-1">
            一站式远程部署与 AI 环境搭建，省心省力。
          </p>
        </section>

        <section className="mb-12 sm:mb-14 md:mb-20" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="sr-only">
            服务与价格
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            <article className="rounded-xl border border-[var(--color-warm-border)] bg-[var(--color-warm-block)] p-5 sm:p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-[var(--color-warm-text)] mb-1">
                高手级
              </h3>
              <p className="text-2xl font-bold text-[var(--color-warm-primary)] mb-2">
                9.9 元
              </p>
              <p className="text-[var(--color-warm-text-muted)] text-sm">
                远程环境配置与基础 VPS 部署，快速上手。适合有VPS的用户、大模型的API Key和飞书的APP ID。
              </p>
            </article>

            <article className="rounded-xl border border-[var(--color-warm-border)] bg-[var(--color-warm-block)] p-5 sm:p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-[var(--color-warm-text)] mb-1">
                初级周卡
              </h3>
              <p className="text-2xl font-bold text-[var(--color-warm-primary)] mb-2">
                69 元
              </p>
              <p className="text-[var(--color-warm-text-muted)] text-sm">
                大模型环境安装与调试，支持常见开源模型。适合没有大模型API Key的用户但是有飞书的APP ID。
              </p>
            </article>

            <article className="rounded-xl border-2 border-[var(--color-warm-primary)] bg-[var(--color-warm-block)] p-5 sm:p-6 shadow-sm transition hover:shadow-md sm:col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold text-[var(--color-warm-text)] mb-1">
                保姆级
              </h3>
              <p className="text-2xl font-bold text-[var(--color-warm-primary)] mb-2">
                169 元
              </p>
              <p className="text-[var(--color-warm-text-muted)] text-sm">
                适合只有飞书的APP ID的用户。
              </p>
            </article>
          </div>
        </section>

        <section
          className="rounded-xl border border-[var(--color-warm-border)] bg-[var(--color-warm-block)] p-6 md:p-8 text-center"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading" className="text-xl font-semibold text-[var(--color-warm-text)] mb-4 md:mb-5">
            联系我们
          </h2>
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <img
              src="/feishu.png"
              alt="OpenClaw 联系方式（飞书/微信等）"
              className="rounded-lg border border-[var(--color-warm-border)] w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] h-auto object-cover mx-auto"
              width={360}
              height={240}
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--color-warm-border)] mt-10 sm:mt-12 py-5 sm:py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-xs sm:text-sm text-[var(--color-warm-text-muted)]">
          © {new Date().getFullYear()} OpenClaw. 远程安装服务。
        </div>
      </footer>
    </>
  );
}
