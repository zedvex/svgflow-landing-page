import IntegrationsColumn from '@/components/IntegrationsColumn';
import Tag from '@/components/Tag';
import { INTEGRATIONS } from '@/constants';

const Integrations = () => {
  return (
    <section className="py-24 overflow-hidden" id="integrations">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Tag>Integrations</Tag>
            <h2 className="text-6xl font-medium mt-6">
              Plays well with <span className="text-[#29abe2]">others</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              Layers seamlessly connects with your favorite tools, making it
              easy to plug into any workflow and collaborate across platforms
            </p>
          </div>
          <div>
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationsColumn integrations={INTEGRATIONS} />
              <IntegrationsColumn
                integrations={INTEGRATIONS.slice().reverse()}
                reverse
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
